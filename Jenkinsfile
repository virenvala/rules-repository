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
          git clone https://github.com/virenvala/rules-repository
          ls -l ./rules-repository

        '''
      }
    }
  }
}
