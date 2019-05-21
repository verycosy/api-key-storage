# What Is Key Storage?

Key Storage is service for hiding API Key on public git repository.

# Why We Use This?

The API Key is exposed to the source code on public git repo.  
This application provides the service that protects api keys from being exposed. 👍

# How Does It Work?

Just add your service name, URL and API key. That’s it !

When you sent request to Key Storage for your API Key, which will check url from request.  
If this url matched service url you added, Key Storage server will return your API Key 😆

# How To Use

## Step 1. Sign up and Login([Link](https://www.keystorage.xyz/sign-up))

![Sign up Description](https://www.keystorage.xyz/public/img/signup.gif)

## Step 2. Add your service after Login([Link](https://www.keystorage.xyz/storage))

![Add Service Description](https://www.keystorage.xyz/public/img/add.gif)

For example, I added my serivce like this.

Service Name → Movie Palette  
Service URL → https://verycosy.net  
API KEY → bla bla

Here is my [service](https://verycosy.net/movie-palette) !  
Also check it out example on my [Github](https://github.com/verycosy/movie-palette/blob/master/src/App.js#L57).

## Step 3. Installation

with NPM

> npm install api-key-storage --save

with Yarn

> yarn add api-key-storage

## Step 4. Request your API KEY

Example

> import KeyStorage from "api-key-storage";  
> const { key: API_KEY } = await KeyStorage('your_service_id');

Note: If you got error, you will receive { error: "Error Message" }

Error will be occur when you send request with incorrect service id,  
or url from request does not matched service url you added.

# Last Step

Happy Hacking !
