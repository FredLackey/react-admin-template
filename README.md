# React Admin Template (`react-admin-template`)  

Custom template for building administrative applications using React

## Backgrund & Goal  

Almost every web application project I launch these days has two common traits.  First, it's written in React (either React Native or ReactJS).  Second, it requires some type of administrative tool for controlling it.  Instead of building countless one-off apps for these projects, my goal is to create one template project (this repo) that I can use as a starter for ech of those projects.

## Setup  

### NPM vs Yarn  

On this project I opted for Yarn instead of NPM.  If you are just trying out this project, I recommend you stick with Yarn as well.  Although there is ony one dependency at the moment (`admin-data`), it makes use of package linking.  Should you use NPM you will not be able to reference `admin-data` without modifying the code or manually linking it with whatever package manager you use.

### Local Development

1. Clone the repo  

    ```bash
    git clone git@github.com:FredLackey/react-admin-template.git
    ```

1. Build and link the dependencies (right now, only one)

    ```bash
    cd ./source/libs/admin-data  
    yarn
    ```

1. Build the main application:

    ```bash
    cd ./source/apps/admin-ui-app
    yarn
    ```

1. Launch the app:

    ```bash
    yarn dev
    ```

## Contact  

If I can be of assistance to your project, please fee free to reach out to me directly.  

**Fred Lackey**  
[fred.lackey@gmail.com](mailto:fred.lackey@gmail.com)  
[http://fredlackey.com](http://fredlackey.com)  
