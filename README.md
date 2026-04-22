# KairosMaterial Website

Static website for KairosMaterial models, hosted on GitHub Pages.

## How to deploy to GitHub Pages

1. Create a repository named `your-username.github.io` (if this is your main site) or create any repository
2. Push these files to your repository
3. Go to repository Settings → Pages
4. Under "Source", select the branch you want to deploy (usually `main` or `master`)
5. Click Save and your site will be published at `https://your-username.github.io/repository-name/`

## How to add new models

To add a new model to the "Available Models" section, edit `index.html` and add a new model card inside the `model-grid` div:

```html
<div class="model-card">
    <h3>Model Name</h3>
    <p class="description">Description of your model, what materials it works with.</p>
    <div class="tags">
        <span class="tag">material</span>
        <span class="tag">system</span>
        <span class="tag">MLIP</span>
    </div>
    <a href="link-to-your-model-download" class="btn btn-primary">Download</a>
</div>
```

Or you can uncomment and use the JavaScript function in `script.js` to add models dynamically.

## Project Structure

```
.
├── index.html      # Main HTML page
├── style.css       # Stylesheet
├── script.js       # JavaScript for interactions
└── README.md       # This file
```

## Customization

- Change the site title and description in `index.html` <head> section
- Update the navigation links to point to your GitHub repository
- Change colors by modifying the `:root` variables in `style.css`
- Add more sections as needed
# kairosmaterials.github.io
