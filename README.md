To Install and Run In your Pc:

1-Navigate to Your Project Directory:
Open a terminal and navigate to the root directory of your Next.js project.

2-Install Dependencies:
Run the following command to install the required dependencies. Ensure that you have Node.js and npm (Node Package Manager) installed on your machine.

npm install

3-Run the Application:
After the installation is complete, you can start your Next.js application using the following command:

npm run dev

4-Access Your Application:
Once the development server is running, open your web browser and go to http://localhost:3000

Application Structure:

Pages Directory:

index.js: Main page for post listing with a search feature and pagination.
[dynamic].js: Dynamic page for post details, where [dynamic] represents the post ID.
bookmarks.js: Page for displaying bookmarked posts.

Components Directory:

Search.js: Component for the search feature.
Pagination.js: Component for handling pagination.

Context Directory:

bookmarkContext.js: Context file for managing bookmarked posts.

Layout Directory:

layout/: Folder for layout-related components.
layout.js: Component for overall layout.
