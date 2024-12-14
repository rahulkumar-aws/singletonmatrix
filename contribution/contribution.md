# Host Your Docusaurus Blog on GitHub Pages with GoDaddy Domain (singletonmatrix.com)

Follow these steps to create a GitHub repository, build and deploy your Docusaurus blog using GitHub Actions, and host it on GoDaddy.

---

## **1. Create a GitHub Repository**
1. Log in to [GitHub](https://github.com).
2. Create a new repository:
   - Name: `singletonmatrix`
   - Set it to **Public**.
   - Initialize with a `README.md`.

---

## **2. Push Your Project to GitHub**
Run the following commands in your project directory:
```bash
git init
git remote add origin https://github.com/rahulkumar-aws/singletonmatrix.git
git add .
git commit -m "Initial commit"
git push -u origin main

3. Configure GitHub Pages
	1.	Go to your repository’s Settings.
	2.	Navigate to Pages.
	3.	Under Build and Deployment, select:
	•	Source: GitHub Actions.
	4.	Save the settings.

4. Set Up GitHub Actions for Deployment

a. Create the GitHub Actions Workflow
	1.	Create the directory structure .github/workflows/deploy.yml in your project.
	2.	Add the following content to deploy.yml:

name: Deploy Docusaurus to GitHub Pages

on:
  push:
    branches:
      - main  # Deploy on every push to the main branch

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    # Step 1: Check out the code
    - name: Checkout code
      uses: actions/checkout@v3

    # Step 2: Set up Node.js
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: 18

    # Step 3: Install dependencies and build the site
    - name: Install dependencies and build
      run: |
        yarn install
        yarn build

    # Step 4: Deploy to GitHub Pages
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build



b. Commit and Push the Workflow

git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow for deployment"
git push

5. Add a CNAME for Your Custom Domain
	1.	Create a CNAME file in the static/ directory:

echo "singletonmatrix.com" > static/CNAME


	2.	Commit and push:

git add static/CNAME
git commit -m "Add CNAME for custom domain"
git push

6. Verify GitHub Actions Deployment
	1.	Go to the Actions tab in your GitHub repository.
	2.	Check that the deployment workflow runs successfully.
	3.	Your site will be available at:

https://<your-github-username>.github.io/singletonmatrix/

7. Configure GoDaddy DNS
	1.	Log in to GoDaddy.
	2.	Navigate to DNS Management for singletonmatrix.com.
	3.	Add the following DNS records:
A Records:

@    185.199.108.153
@    185.199.109.153
@    185.199.110.153
@    185.199.111.153

CNAME Record:

www    <your-github-username>.github.io


	4.	Save the DNS changes.

8. Verify Your Custom Domain
	1.	Wait for DNS propagation (can take up to 24 hours).
	2.	Visit your domain: https://singletonmatrix.com.

9. Enable HTTPS
	1.	Go to Settings → Pages in your GitHub repository.
	2.	Check the box for Enforce HTTPS.

Summary
	1.	Create and push your project to GitHub.
	2.	Set up GitHub Actions to build and deploy.
	3.	Add a CNAME file for your custom domain.
	4.	Configure GoDaddy DNS to point to GitHub Pages.
	5.	Verify your site and enable HTTPS.

Enjoy your blog live at singletonmatrix.com! 🚀

This Markdown version retains all formatting and is ready for use in your documentation or as a guide. Let me know if you need further assistance! 😊