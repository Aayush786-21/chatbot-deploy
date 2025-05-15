# Stage 1: Build the application
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Optional: You can uncomment the line below if you still need to debug the builder stage's contents
# RUN ls -la /app && ls -la /app/.next && ls -la /app/public

# Stage 2: Production image
FROM node:18-alpine
WORKDIR /app

# Copy the ENTIRE /app directory from the builder stage
COPY --from=builder /app /app/

# Now, clean up node_modules from the builder stage (which had devDeps)
# and reinstall only production dependencies.
# This ensures we have the correct package.json, package-lock.json, next.config.js, .next, public etc.
# but allows us to control the node_modules for the production stage.
RUN rm -rf /app/node_modules
RUN npm install --only=production

# Next.js applications typically run on port 3000 by default
EXPOSE 3000

# The command to start the Next.js production server
CMD ["npm", "start"]
