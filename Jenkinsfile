pipeline {
	  agent any
	
	  stage('Source') { 
	      steps {
	    checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'HappyTrip', url: 'https://github.com/bhaveshrajrathore/ZApp.git']]])
	    
	      }
	    }
	
	  stage ('Build'){
	          agent DockerHost
		  stages {
        stage('Build image') {
            steps {
                echo 'Starting to build docker image'

                script {
                    def customImage = docker.build("node:${env.BUILD_ID}")
			customImage.push()
                }
            }
        }
    }
}
}
