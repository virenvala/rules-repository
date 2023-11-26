pipeline {
  agent { dockerfile true }
  stages {
    stage('Test') {
      steps {
        sh '''
          node --version
          git --version
          curl --version

          pwd
          ls -l
          git diff --name-only HEAD HEAD~1 > diff.txt
          cat diff.txt
        '''
      }
    }
  }
}
