# <img src="app/src/main/res/drawable/ic_launcher.png" align="left" width="48" height="48" title="TicTacToe App Icon"> TicTacToe-App

A modern, real-time Tic-Tac-Toe game for Android. Play locally with a friend or challenge them online!

## Download

Download the latest APK to test the app:
[**Download TicTacToe.apk**](TicTacToe.apk)

## Features

- **Offline Mode**: Play with a friend on the same device (Pass and Play).
- **Online Multiplayer**: Create a game room and invite a friend to join via a 4-digit code.
- **Real-time Updates**: Powered by Firebase Firestore for instant game state synchronization.
- **Dynamic UI**: Clean interface with real-time status updates (e.g., "Your turn", "Player X Won").

## Tech Stack

- **Language**: [Kotlin](https://kotlinlang.org/)
- **UI**: Android Views (XML) with ViewBinding
- **Backend**: [Firebase Firestore](https://firebase.google.com/docs/firestore) (NoSQL Database)
- **Architecture**: MVVM (Model-View-ViewModel) pattern with LiveData

## How to Play

### Online Mode
1. **Create Game**: Tap "Create Online Game". You will be given a unique 4-digit Game ID.
2. **Share ID**: Share this ID with your friend.
3. **Join Game**: Your friend enters the Game ID in the input box and taps "Join Online Game".
4. **Play**: The game starts! Moves are synced in real-time.

### Offline Mode
3. Tap "Play Offline".
4. Take turns playing on the same device.

## Troubleshooting

### "PERMISSION_DENIED" Error
If you see a `PERMISSION_DENIED` error when creating or joining a game, it means the app cannot talk to the database.
1.  **Check Internet**: Ensure your device has an active internet connection (WiFi or Data).
2.  **Firestore Rules**: If you are the developer, ensure your Firestore Security Rules are set to **Test Mode** (allow read/write for all).

### "Game not found"
- Ensure the Game ID is correct (it's a 4-digit number).
- Ensure the game was created successfully on another device first.
