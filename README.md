# Discordjs bot template
This is my template for many of my discord bots.

## Setup
Rename `.env.example` file to `.env`

Open it with your favorite editor, Nano, Vim or Emacs.

Replace the `TOKEN` in the `.env` file with your own [Authentication Token](https://discord.com/developers/applications)  
Replace the `GUILD_ID` in the `.env` file with the your guild id.

## DO NOT MAKE THE .env FILE PUBLIC
By default, `.env` is git ignored (meaning it is ignored by git). If you disable this, there can be huge security risks such as
- Hackers being able to use your authentication token and using it for malicious purposes
- Bad in general
