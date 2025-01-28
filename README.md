# Qantas Code Test

## Initial Setup

```bash
yarn install    # Install dependencies
yarn dev        # Start development server
yarn test       # Run test suite
```

## Approach

- Use hooks for data fetching
  - Encapsulates all the logic to keep main component clean
  - Enables caching of responses
  - Allows sorting results if required
- API error handling
  - Errors are captured but not displayed in the UI
- Component Structure
  - Separate Ratings component with tests
  - Separate Hotel Lists component with tests
- UI Considerations
  - Not pixel perfect, used assumed spacing
  - Optimized for desktop width
