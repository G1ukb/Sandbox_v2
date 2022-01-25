Для запуска проекта требуется -

    npm install
    npm run build
    node app.js

Для деплоя на удаленной машине:

    sudo yum install -y gcc-c++ make
    curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
    sudo yum install -y nodejs
    sudo aws configure
    
    sudo aws s3 cp s3://belski.s3.bucket/ec2.zip ec2.zip
    unzip ec2.zip
    
    npm install
    npm run build
    node app.js