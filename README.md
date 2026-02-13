# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# scrabble-project

This document outlines the pending requirements and tasks needed to complete the Scrabble
game application using React and a mock JSON server. The project is divided into several key
areas, including UI development, backend simulation, game logic, and deployment. Below is a
detailed breakdown of the pending tasks.

---

1. UI Development
   Pending Tasks:
1. Board Component:

- [ ] Create a 15x15 grid for the Scrabble board.
- [ ] Implement alternating tile colors to mimic a Scrabble board.
- [ ] Add unique identifiers (e.g.,
      `data-row
`
      ,
      `data-col`) to each tile for easy reference.
- [ ] Add hover effects to tiles for better interactivity.

2. Tile Component:

- [ ] Create a reusable
      `Tile
`
      component to represent each tile on the board.
- [ ] Display the letter and value of the tile (if a tile is placed).
- [ ] Add visual feedback for selected tiles (e.g., border or background color).

3. Tile Rack Component:

- [ ] Create a
      `TileRack`
      component to display the tiles available to the current player.
- [ ] Allow players to drag and drop tiles from the rack to the board (optional).
- [ ] Add a "Shuffle" button to rearrange the tiles in the rack.

4. Player Component:

- [ ] Create a
      `Player
`
      component to display player information (name, score, etc.).
- [ ] Add a "Pass" button to allow players to skip their turn.
- [ ] Add a "Swap Tiles" button to allow players to exchange tiles.

5. Scoreboard:

- [ ] Create a scoreboard to display the scores of all players.
- [ ] Highlight the current player’s turn.

6. Responsiveness:

- [ ] Ensure the UI is responsive and works well on different screen sizes (desktop,
      tablet, mobile).

---

2. Backend Simulation
   Pending Tasks:
1. Mock JSON Server:

- [ ] Set up a mock JSON server to simulate the backend.
- [ ] Define the database schema for
      `tiles
`
      ,
- [ ] Create RESTful API endpoints for:
- Fetching the current state of the board.
- Updating the position of tiles on the board.
- Fetching and updating player scores.
- Managing the tile rack for each player.
  `board`
  , and `players`
  .

2. API Integration:

- [ ] Use
      `fetch`
      or
      `Axios
` to interact with the JSON server.
- [ ] Implement error handling for API requests (e.g., network errors, server errors).
- [ ] Add loading states while fetching data from the server.

---

3. Game Logic
   Pending Tasks:
1. Tile Placement:

- [ ] Implement logic to place tiles on the board.
- [ ] Validate tile placement (e.g., ensure tiles are placed in valid positions).
- [ ] Update the board state and send a PUT request to the server when a tile is placed.

2. Word Validation:

- [ ] Implement a function to validate words formed on the board.
- [ ] Use a dictionary API (e.g., Oxford Dictionaries API) to check if the word is valid.
- [ ] Highlight invalid words on the board (e.g., red border).

3. Score Calculation:

- [ ] Calculate the score based on tile values and word multipliers.
- [ ] Add logic for double/triple letter and word scores.
- [ ] Update the player’s score and send a PUT request to the server.

4. Turn Management:

- [ ] Implement logic to switch turns between players.
- [ ] Add a timer for each player’s turn (optional).

5. Endgame Logic:

- [ ] Implement logic to detect when the game is over (e.g., all tiles are used).
- [ ] Display the final scores and declare the winner.

---

4. Styling
   Pending Tasks:
1. Board Styling:

- [ ] Style the board with alternating colors for tiles.
- [ ] Add special styling for premium squares (e.g., double/triple letter/word scores).

2. Tile Styling:

- [ ] Style the tiles to display the letter and value clearly.
- [ ] Add hover and selected states for tiles.

3. Player and Scoreboard Styling:

- [ ] Style the player component to display the name, score, and buttons clearly.
- [ ] Style the scoreboard to make it visually appealing.

4. Responsive Design:

- [ ] Ensure the app is fully responsive and works well on mobile devices.

---

5. Testing
   Pending Tasks:
1. Unit Testing:

- [ ] Write unit tests for key components (e.g.,
      `Tile
`
      `Board`
      ,
      ,
      `Player
`).
- [ ] Test the game logic functions (e.g., word validation, score calculation).

2. Integration Testing:

- [ ] Test the integration between the frontend and the mock JSON server.
- [ ] Ensure data is fetched and updated correctly.

3. User Testing:

- [ ] Conduct user testing to gather feedback on the UI and gameplay.
- [ ] Fix any bugs or usability issues identified during testing.

---

6. Deployment
   Pending Tasks:
1. Frontend Deployment:

- [ ] Deploy the React app using GitHub Pages, Netlify, or Vercel.
- [ ] Ensure the app is accessible via a public URL.

2. Backend Deployment:

- [ ] Deploy the JSON server using a service like Heroku or Render.
- [ ] Ensure the server is accessible via a public URL.

3. Environment Variables:

- [ ] Use environment variables to store API endpoints and other sensitive data.
- [ ] Ensure the app works correctly in both development and production environments.

---

7. Documentation
   Pending Tasks:
1. README File:

- [ ] Write a comprehensive README file with:
- Project overview.
- Setup instructions.
- How to run the app locally.
- How to deploy the app.
- Links to the deployed app and server.

2. Code Comments:

- [ ] Add comments to the code to explain key functions and logic.
- [ ] Ensure the code is well-documented for future maintenance.

3. User Guide:

- [ ] Create a user guide explaining how to play the game.
- [ ] Include screenshots and step-by-step instructions.

---

8. Optional Features
1. Multiplayer Support:

- [ ] Implement real-time multiplayer support using WebSockets or a similar technology.

2. AI Opponent:

- [ ] Add an AI opponent for single-player mode.
- [ ] Implement basic AI logic to play the game.

3. Leaderboard:

- [ ] Add a leaderboard to track high scores across multiple games.

4. Themes:

- [ ] Add support for different themes (e.g., dark mode, light mode).
