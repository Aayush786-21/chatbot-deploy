// Jenkinsfile (for staging branch)  
pipeline {
    agent any

    tools {
        // Ensure 'node18' (or your chosen name) is configured in
        // Jenkins > Manage Jenkins > Global Tool Configuration > NodeJS installations
        nodejs 'node18'
    }

    environment {
        DOCKERHUB_CREDENTIALS_ID = 'dockerhub-credentials'
        DOCKER_IMAGE_NAME        = 'aayush786/chatbot-staging' // <<<<<<< CHANGE THIS (your Docker Hub username)
        APP_NAME                 = 'chatbot-app-staging'
        K8S_NAMESPACE            = 'staging'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                sh 'echo "Current branch:" && git branch'
                sh 'echo "Workspace content:" && ls -la'
            }
        }

        stage('Install Dependencies & Build App') {
            steps {
                sh 'echo "Node version:" && node -v'
                sh 'echo "NPM version:" && npm -v'
                sh 'echo "Installing dependencies with npm ci..."'
                sh 'npm ci' // 'npm ci' is preferred for CI for faster, reliable builds from package-lock.json
                sh 'echo "Building Next.js app with npm run build..."'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def imageTag = env.BUILD_NUMBER ?: sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    env.FULL_IMAGE_NAME = "${env.DOCKER_IMAGE_NAME}:${imageTag}"
                    env.LATEST_IMAGE_NAME = "${env.DOCKER_IMAGE_NAME}:latest"

                    sh "docker build -t ${env.FULL_IMAGE_NAME} -t ${env.LATEST_IMAGE_NAME} ."
                    echo "Built Docker image: ${env.FULL_IMAGE_NAME} and ${env.LATEST_IMAGE_NAME}"
                }
            }
        }

        stage('Push Docker Image to Staging Repo') {
            steps {
                script {
                    withDockerRegistry(credentialsId: env.DOCKERHUB_CREDENTIALS_ID) {
                        sh "docker push ${env.FULL_IMAGE_NAME}"
                        sh "docker push ${env.LATEST_IMAGE_NAME}"
                    }
                    echo "Pushed ${env.FULL_IMAGE_NAME} and ${env.LATEST_IMAGE_NAME} to Docker Hub"
                }
            }
        }

        // --- Placeholder for Future K8s Deployment Stage (Part of Req 6 later) ---
        // stage('Deploy to Staging K8s') {
        //    steps {
        //        script { echo "Skipping K8s deployment for now" }
        //    }
        // }
        // --- End Placeholder K8s ---
    }

    post {
        always {
            echo 'Staging pipeline finished.'
        }
        success {
            echo "Staging pipeline successful for image: ${env.FULL_IMAGE_NAME}"
        }
        failure {
            echo 'Staging pipeline failed.'
        }
    }
}
