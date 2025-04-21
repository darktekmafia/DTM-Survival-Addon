# DTM Survival Addon

## Overview
DTM Survival Addon is a Minecraft Bedrock Edition addon that enhances the survival experience by introducing custom items, behavior packs, and resource packs. This addon is designed to make the game more challenging and engaging for players.

## Features
### Custom Items
- **Admin Tool**: A powerful tool for server administrators with special abilities to manage the server.
- **Survival Tool**: A versatile tool designed to assist players in survival mode with unique functionalities.

### Behavior Packs
- **Player Management**: Scripts for managing player permissions [^1] , banning, and unbanning players.
  - **Ban Script**: Permanently ban players from the server with dynamic properties storage for persistence.
  - **Admin Script**: Provides administrative commands and functionalities for server management.

### Resource Packs
- **Custom Textures**: High-quality textures for new items and tools to enhance the visual experience.
- **Item Textures**: Custom textures for admin and survival tools, providing a unique look and feel.

### Economy System [^2]
- **Dynamic Economy**: Implements an in-game currency system to manage trades and transactions.
- **Player Balance Tracking**: Uses world dynamic properties to store and retrieve player balances.

### Player Rules Management
- **Rules Agreement**: A form-based system to ensure players read and accept server rules before playing.

## Installation
### Prerequisites
- Minecraft Bedrock Edition 1.19 or higher.
- Access to the Minecraft Bedrock Edition dedicated server (if hosting).

### Steps
1. **Download the Addon**:
   - Clone the repository:
     ```bash
     git clone https://github.com/darktekmafia/DTM-Survival-Addon.git
     ```
2. **Install the Addon**:
   - Copy the `behavior_packs` and `resource_packs` folders to your Minecraft Bedrock installation directory.
   - For Windows, this directory is usually located at `C:\Users\[YourUsername]\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\`.

3. **Activate the Addon**:
   - Launch Minecraft Bedrock Edition.
   - Go to **Settings** -> **Storage** -> **Resource Packs** and **Behavior Packs**.
   - Activate the DTM Survival Addon in your world settings.

## Usage
### Custom Items
- **Admin Tool**: Use this tool to manage server settings and player actions.
- **Survival Tool**: Equip this tool for various survival tasks.

### Player Management
- **Warn Player**:
- **Kick Player**:
- **Freeze / Unfreeze Player**:
- **Ban / UnBan Player**:

### Contributing
We welcome contributions from the community! If you'd like to contribute to the DTM Survival Addon, please fork the repository and create a pull request with your changes.

### Guidelines
- Ensure your code follows the project's coding standards.

- Write clear and concise commit messages.

- Test your changes thoroughly before submitting a pull request.

### License
This project is licensed under the MIT License. See the LICENSE file for more information.

### Contact
For any questions or support, please contact the project maintainer at info@darktekmafia.com .

Happy surviving! 😊


[^1]: Player permissions will be added in a later release and do not exist in the addon yet.
[^2]: The Economy System is not available yet. It will be added in a later release

