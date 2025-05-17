// Jenkinsfile (for staging branch - build and push only)
pipeline {
    agent any
    tools { nodejs 'node18' }
    environment {
        DOCKERHUB_CREDENTIALS_ID = 'dockerhub-credentials'
        DOCKER_IMAGE_NAME        = 'aayush786/chatbot-staging' // Staging image
    }
    stages {
        stage('Checkout') { steps { checkout scm } }
        stage('Install Dependencies & Build App') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }
        stage('Build Docker Image for Staging') {
            steps {
                script {
                    def imageTag = env.BUILD_NUMBER ?: sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    env.FULL_IMAGE_NAME_STAGING = "${env.DOCKER_IMAGE_NAME}:${imageTag}"
                    env.LATEST_IMAGE_NAME_STAGING = "${env.DOCKER_IMAGE_NAME}:latest"
                    sh "docker build -t ${env.FULL_IMAGE_NAME_STAGING} -t ${env.LATEST_IMAGE_NAME_STAGING} ."
                    echo "Built Staging Docker image: ${env.FULL_IMAGE_NAME_STAGING} and ${env.LATEST_IMAGE_NAME_STAGING}"
                }
            }
        }
        stage('Push Docker Image to Staging Repo') {
            steps {
                script {
                    withDockerRegistry(credentialsId: env.DOCKERHUB_CREDENTIALS_ID) {
                        sh "docker push ${env.FULL_IMAGE_NAME_STAGING}"
                        sh "docker push ${env.LATEST_IMAGE_NAME_STAGING}"
                    }
                    echo "Pushed ${env.FULL_IMAGE_NAME_STAGING} and ${env.LATEST_IMAGE_NAME_STAGING} to Docker Hub staging repo"
                }
            }
        }
    }
    post {
        always { echo 'Staging pipeline (build & push) finished.' }
        success { echo "Staging Build & Push successful for image: ${env.FULL_IMAGE_NAME_STAGING}" }
        failure { echo 'Staging Build & Push failed.' }
    }
}
