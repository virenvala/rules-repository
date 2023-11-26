pipeline {
  agent { dockerfile true }
  stages {
    stage('Find Updates') {
      steps {
        sh '''
          git diff --name-only HEAD HEAD~1 > diff.txt
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
