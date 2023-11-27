pipeline {
  agent { dockerfile true }
  environment {
    TEST_CREDS = credentials('TEST_CREDS')
  }
  stages {
    stage('Find Updates') {
      steps {
        sh '''
          git diff --name-only HEAD HEAD~1 > diff.txt
          echo Cred user is $TEST_CREDS_USR
          node app.js
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
