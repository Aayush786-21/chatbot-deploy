// Jenkinsfile (for main/production branch)
pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    environment {
        DOCKERHUB_CREDENTIALS_ID = 'dockerhub-credentials'
        DOCKER_IMAGE_NAME        = 'aayush786/chatbot-prod' // Your production image
        APP_DEPLOYMENT_NAME      = 'chatbot-app-prod'
        K8S_NAMESPACE            = 'production'
        KUBECONFIG_CREDENTIALS_ID = 'kubeadm-cluster-config' // For your Kubeadm cluster
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                sh 'echo "Current branch:" && git branch'
            }
        }

        stage('Install Dependencies & Build App') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image for Production') {
            steps {
                script {
                    def imageTag = env.BUILD_NUMBER ?: sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    env.FULL_IMAGE_NAME_PROD = "${env.DOCKER_IMAGE_NAME}:${imageTag}"
                    env.LATEST_IMAGE_NAME_PROD = "${env.DOCKER_IMAGE_NAME}:latest"
                    sh "docker build -t ${env.FULL_IMAGE_NAME_PROD} -t ${env.LATEST_IMAGE_NAME_PROD} ."
                    echo "Built Production Docker image: ${env.FULL_IMAGE_NAME_PROD} and ${env.LATEST_IMAGE_NAME_PROD}"
                }
            }
        }

        stage('Push Docker Image to Production Repo') {
            steps {
                script {
                    withDockerRegistry(credentialsId: env.DOCKERHUB_CREDENTIALS_ID) {
                        sh "docker push ${env.FULL_IMAGE_NAME_PROD}"
                        sh "docker push ${env.LATEST_IMAGE_NAME_PROD}"
                    }
                    echo "Pushed ${env.FULL_IMAGE_NAME_PROD} and ${env.LATEST_IMAGE_NAME_PROD} to Docker Hub production repo"
                }
            }
        }

        stage('Deploy to Production K8s (Kubeadm Cluster)') {
            steps {
                withKubeConfig([credentialsId: env.KUBECONFIG_CREDENTIALS_ID]) {
                    script {
                        sh "kubectl create namespace ${env.K8S_NAMESPACE} || true"
                        sh "echo 'Applying Production Deployment...'"
                        sh "cat k8s/chatbot-deployment-prod.yaml > k8s/chatbot-deployment-prod-apply.yaml"
                        sh "sed -i 's|image: .*|image: ${env.FULL_IMAGE_NAME_PROD}|g' k8s/chatbot-deployment-prod-apply.yaml"
                        sh "kubectl apply -f k8s/chatbot-deployment-prod-apply.yaml -n ${env.K8S_NAMESPACE}"
                        sh "kubectl apply -f k8s/chatbot-service-prod.yaml -n ${env.K8S_NAMESPACE}"
                        sh "echo 'Waiting for rollout to complete...'"
                        sh "kubectl rollout status deployment/${env.APP_DEPLOYMENT_NAME} -n ${env.K8S_NAMESPACE} --timeout=5m"
                        echo "Deployed to Production K8s: ${env.FULL_IMAGE_NAME_PROD}"
                    }
                }
            }
        }
    }
    post {
        always {
            echo 'Production pipeline finished.'
            script {
                sh "rm -f k8s/chatbot-deployment-prod-apply.yaml"
            }
        }
        success {
            echo "Production pipeline successful for image: ${env.FULL_IMAGE_NAME_PROD}"
        }
        failure {
            echo 'Production pipeline failed.'
        }
    }
}
