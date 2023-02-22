# reddit-chat-saver

Method to make it easier to save long reddit chat threads on desktop

## How To Use

This assumes you are already navigated to [Reddit Chat](https://www.reddit.com/chat) and logged in

You will create 2 buttons:

- 1, for scrolling to the top of your chat. You'll have to scroll the mouse up just a little for Reddit to load new messages, then you can click the scroll to top button again
- 2, for creating a link on the page that will download a text file of your current chat thread

**Follow these instructions to create the buttons:**

1. Make sure your bookmarks bar is shown. This is where the buttons will go.
2. Open the [`scrollToTop.js`](https://github.com/brentonjackson/reddit-chat-saver/blob/master/scrollToTop.js) file in a new tab (Right-click > Open in New Tab). Copy the entire file contents.
3. Create a bookmark. It can be of any page
   1. In the bookmark's **_Name_** field, enter 'RedditScroll'
   2. In the bookmark's **_URL_** field, paste the contents of the file you copied.
   3. Hit save to create the bookmark. This button will scroll to the top of your chat thread.

\*Repeat the same process with the [`saveMessageThread.js`](https://github.com/brentonjackson/reddit-chat-saver/blob/master/saveMessageThread.js) file.

The saveMessages button creates a new link everytime you click it. So if you go to another chat thread, you will have to click the button again!
