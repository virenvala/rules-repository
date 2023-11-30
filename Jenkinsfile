pipeline {
  agent { dockerfile true }
  environment {
    TEST_CREDS = credentials('TEST_CREDS')
    TEST_PRIVATE_KEY = credentials('TEST_PRIVATE_KEY')
  }
  stages {
    stage('Find Updates') {
      steps {
        withCredentials(bindings: [sshUserPrivateKey(credentialsId: 'TEST_PRIVATE_KEY', \
                                                             keyFileVariable: 'TEST_PRIVATE_KEY_FILE')]) {
          //
          sh 'echo Private key is $TEST_PRIVATE_KEY_FILE'
          sh 'node spawn.js' 
        }
        sh '''
          git diff --name-only HEAD HEAD~1 > diff.txt
          echo Cred user is $TEST_CREDS_USR
          echo Private key is $TEST_PRIVATE_KEY_USR
          
        '''
      }
    }
    stage('Copy Files') {
      steps {
        sh '''
          cat diff.txt
          
        '''
      }
    }
    stage('Check Syntax') {
      steps {
        sh '''
          cat diff.txt
        '''
      }
    }
    stage('Reload Process') {
      steps {
        sh '''
          cat diff.txt
        '''
      }
    }
  }
}
