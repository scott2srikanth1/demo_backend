node{
    stage("Git Clone"){
        git branch: 'main', credentialsId: 'GIT_HUB_CREDENTIALS', url: 'https://github.com/scott2srikanth1/demo_backend'
    }
    stage("Docker Build"){

        sh 'docker build -t myfsdcc_backend .'
        sh 'docker tag myfsdcc_backend scott2srikanth/myfsdcc_backend:latest'

    }

     withCredentials([string(credentialsId: 'dockerhub', variable: 'password')]){
         sh 'docker login -u scott2srikanth -p $password'
     }

    stage("Push image to Dockerhub"){
        sh 'docker push scott2srikanth/myfsdcc_backend:latest'
    }

     stage("Spin-up Kubernetes"){
        sh 'kubectl apply -f backend.yaml'
    }
}