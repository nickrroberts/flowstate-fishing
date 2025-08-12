# Flow State Fishing - Editable Fields Guide

## Overview
This Ghost theme includes customizable text fields that can be edited directly from the Ghost Admin panel without touching any code.

## How to Edit Fields

1. Log into your Ghost Admin panel
2. Navigate to **Settings → Design & Branding**
3. Scroll down to the **Site Design** section
4. Look for the custom theme settings grouped by section

## Available Editable Fields

### Hero Section
- **Hero Subtitle**: The subtitle text that appears below "Find Your Flow State"
- **Hero Description**: The main descriptive text in the hero section

### Services Section
- **Services Subtitle**: The subtitle text for the services section
- **Services Description**: The main description text explaining the services

### About Section
- **About Subtitle**: The subtitle text introducing the flow state concept
- **About Description**: The detailed description of what flow state means

### Gallery Section
- **Gallery Subtitle**: The subtitle text for the gallery
- **Gallery Description**: The description text explaining the gallery content

### Blog Page
- **Blog Title**: The main title for the blog/stories page
- **Blog Subtitle**: The subtitle/description for the blog page

### Site-wide Statistics
These numbers appear in both the Hero and About sections:
- **Years Experience Number**: Number of years of experience (e.g., "12+")
- **Guided Trips Number**: Number of guided trips (e.g., "500+")
- **River Systems Number**: Number of river systems explored (e.g., "25+")

### Booking Integration
- **Calendly URL**: Your Calendly scheduling page URL for booking integration

## Important Notes

1. **Character Limits**: Keep text concise for best display
2. **Line Breaks**: The theme automatically handles text wrapping
3. **Special Characters**: Avoid using special HTML characters
4. **Statistics Format**: Include the + sign if desired (e.g., "12+" not just "12")

## Sections NOT Editable via Admin

The following content remains hardcoded and requires theme file editing:
- Individual service cards (pricing, descriptions, features)
- Navigation menu items
- Footer content
- Social media links
- Instructor name and bio details

## Making Additional Fields Editable

If you need more fields to be editable, you'll need to:
1. Edit the `package.json` file to add new custom settings (max 50 total)
2. Update the corresponding template files in the `partials/` folder
3. Rebuild and re-upload the theme

## Support

For theme-specific issues, consult your developer.
For Ghost platform issues, visit https://ghost.org/help/
</content>
</invoke>