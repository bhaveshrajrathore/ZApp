pipeline{
     environment {
     registry = "rajbhavesh/demo"
     registryCredential = "Docker"
     dockerImage = "ZullApp"
  }
   agent { label 'DockerHost' }
    options {
        skipDefaultCheckout()
    }
	parameters { 
	booleanParam( name: 'Bulild Docker image', defaultValue: true, description: 'Build the Docker Image')
	booleanParam( name: 'Deploy in Kubernetes ', defaultValue: false, description: 'Deploy in google kubernetes cloud')
	
	}
    stages{
        stage ('Checkout'){
			steps{
			echo "Code Checkout"
			checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'HappyTrip', url: 'https://github.com/bhaveshrajrathore/ZApp.git']]])
			}
		}
	    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Push image To Registry') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
	    dockerImage.push("ZullApp1${env.BUILD_NUMBER}")
            //dockerImage.push("ZullApp")
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}
