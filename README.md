# Flowstate Fishing 🎣 420 69

A premium Ghost theme for Tanner.

## 🎯 Features

- **Professional Design**: Clean, modern layout optimized for fly fishing instruction businesses
- **Integrated Booking**: Calendly integration for seamless appointment scheduling
- **Responsive Layout**: Mobile-first design that looks great on all devices
- **Service Showcase**: Beautiful service cards with pricing and details
- **Image Gallery**: Showcase your fishing experiences and locations
- **Blog Integration**: Share stories, tips, and fishing insights
- **Smooth Animations**: Subtle scroll animations and transitions
- **SEO Optimized**: Built with Ghost's SEO best practices
- **Performance Focused**: Optimized assets and fast load times

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- **Ghost-CLI** - Install globally with `npm install -g ghost-cli`

## 🚀 Ghost Setup

### Installing Ghost Locally

1. Create a directory for your Ghost installation:
```bash
mkdir ghost-local
cd ghost-local
```

2. Install Ghost using Ghost-CLI:
```bash
ghost install local
```

This will:
- Download and install Ghost
- Set up a SQLite database
- Create a local development environment
- Start Ghost at `http://localhost:2368`

3. Complete the setup:
- Navigate to `http://localhost:2368/ghost`
- Create your admin account
- Complete the initial setup wizard

## 🎨 Theme Installation

### Getting the Theme Running

1. Clone this repository:
```bash
cd ..
git clone https://github.com/YOUR_USERNAME/flow-state-fishing.git
cd flow-state-fishing
```

2. Install theme dependencies:
```bash
npm install
```

3. Create a symlink to Ghost's theme directory:
```bash
# From the flow-state-fishing directory
ln -s $(pwd) ../ghost-local/content/themes/flow-state-fishing
```

4. Restart Ghost:
```bash
cd ../ghost-local
ghost restart
```

5. Activate the theme:
- Go to `http://localhost:2368/ghost/#/settings/design`
- Scroll to "Themes"
- Find "Flow State Fishing" and click "Activate"

### Starting Development Mode

1. In the theme directory, start the development watcher:
```bash
cd ../flow-state-fishing
npm run dev
```

This will:
- Watch for changes in your theme files
- Automatically compile CSS and JavaScript
- Enable LiveReload on port 35730
- Hot reload changes in your browser

2. Open `http://localhost:2368` in your browser to see your site

## 🛠️ Development Workflow

### File Structure

```
flow-state-fishing/
├── assets/
│   ├── css/           # Source CSS files
│   ├── js/            # Source JavaScript files
│   ├── images/        # Theme images
│   └── built/         # Compiled assets (gitignored)
├── partials/
│   ├── hero.hbs       # Hero section
│   ├── navigation.hbs # Main navigation
│   ├── services.hbs   # Services section
│   ├── about.hbs      # About section
│   ├── gallery.hbs    # Gallery section
│   └── footer.hbs     # Footer section
├── default.hbs        # Main template
├── index.hbs          # Homepage
├── post.hbs           # Single post template
├── page.hbs           # Single page template
├── home.hbs           # Custom homepage
└── package.json       # Theme configuration
```

### Available Commands

```bash
# Start development mode with hot reload
npm run dev

# Build production assets
npm run build

# Create a zip file for theme upload
npm run zip

# Test theme compatibility
npm run test
```

### Making Changes

1. **CSS Changes**: Edit files in `assets/css/components/`
2. **JavaScript**: Modify files in `assets/js/`
3. **Templates**: Edit `.hbs` files in root and `partials/`
4. **Images**: Add to `assets/images/`

All changes are automatically compiled and reloaded in development mode.

## 🎨 Customization

### Theme Settings

The theme includes custom settings configurable in Ghost Admin:

- **Calendly URL**: Your Calendly scheduling link
- **Hero Subtitle**: Main tagline text
- **Service Details**: Titles and prices for services
- **About Content**: Personal story and quotes
- **Statistics**: Years experience, clients served, etc.

Access these at: `Ghost Admin → Settings → Design → Theme Settings`

### Color Scheme

Main colors are defined in `assets/css/vars.css`:
- Forest Green: `#2C5530`
- Dark Teal: `#436C70`
- Burnt Orange: `#C15F1C`
- Olive Brown: `#57512D`
- Warm Beige: `#F5E6D3`

### Typography

The theme uses:
- **Headers**: Playfair Display
- **Body**: Source Serif Pro
- **UI Elements**: Inter
- **Logo**: Pacifico

## 📦 Production Deployment

### Building for Production

1. Build optimized assets:
```bash
npm run build
```

2. Create a theme zip:
```bash
npm run zip
```

3. Upload to Ghost:
- Go to `Ghost Admin → Settings → Design`
- Click "Change theme"
- Upload the `flow-state-fishing.zip` file

### Using Ghost CLI for Production

For production Ghost installations:

```bash
# Install Ghost in production mode
ghost install

# Configure your domain, database, etc.
ghost config

# Start Ghost
ghost start
```

## 🔧 Troubleshooting

### Ghost won't start
- Check if port 2368 is available: `lsof -i :2368`
- Stop Ghost: `ghost stop`
- Start again: `ghost start`

### Theme changes not showing
- Ensure development mode is running: `npm run dev`
- Clear browser cache
- Check if symlink is correct: `ls -la ../ghost-local/content/themes/`

### LiveReload not working
- Check if port 35730 is available
- Restart the development watcher
- Disable browser extensions that might interfere

### CSS/JS not compiling
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for syntax errors in your files
- Ensure Node.js version is 18+

## 📝 Ghost Resources

- [Ghost Documentation](https://ghost.org/docs/)
- [Ghost Themes Guide](https://ghost.org/docs/themes/)
- [Handlebars Documentation](https://handlebarsjs.com/)
- [Ghost API Reference](https://ghost.org/docs/content-api/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

Copyright (c) 2024 - Released under the [MIT license](LICENSE).

---

Built with ❤️ for the fly fishing community