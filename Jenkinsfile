pipeline {
  agent { dockerfile true }
  environment {
    TEST_CREDS = credentials('TEST_CREDS')
    TEST_PRIVATE_KEY = credentials('TEST_PRIVATE_KEY')
  }
  stages {
    stage('Copy Files') {
      steps {
        withCredentials(bindings: [sshUserPrivateKey(credentialsId: 'TEST_PRIVATE_KEY', \
                                                             keyFileVariable: 'TEST_PRIVATE_KEY_FILE')]) {
          //
          sh '''
            git diff --name-only HEAD HEAD~1 > diff.txt
            
          
          '''
        }
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
          node reload_rule.js
        '''
      }
    }
  }
}
