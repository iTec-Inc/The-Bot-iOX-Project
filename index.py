import discord
from discord.ext import commands

print('Enter your TOKEN:')
TOKEN = input()

description = '''Bot-iOX 2020©. Made as a Open-Source Project from JetPack Inc, This Project is available at https://bit.ly/botiox '''
bot = commands.Bot(command_prefix='', description=description)

@bot.event
async def on_ready():
    print('Logged in as')
    print(bot.user.name)
    print(bot.user.id)
    print('------')

	
@bot.command	()
async def hello(ctx):
    """Says Hi."""
    await ctx.send("Hi.")
    print('Bot-iOX has said "Hi"')
    
@bot.command    ()
async def hi(ctx):
    """Says Hello."""
    await ctx.send("Hello.")
    print('Bot-iOX has said "Hello"')


@bot.command()
async def add(ctx, left : int, right : int):
    """Adds two numbers together."""
    await ctx.send(left + right)

bot.run(TOKEN)
