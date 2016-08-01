class Song(object):

    def __init__(self, lyrics, artist="Unknown"):
        self.lyrics = lyrics
        self.artist = artist

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

    def credits(self):
        print("Artist: {}".format(self.artist))

happy_bday = Song(["Happy birthday to you",
                    "I don't want to get sued",
                    "So I'll stop right there"])

bulls_on_parade = Song(["They rally around tha family",
                        "With pockets full of shells"])

happy_bday.sing_me_a_song()

bulls_on_parade.sing_me_a_song()

imagine = Song(["Imagine there's no heaven",
                "It's easy if you try"
                "No hell below us",
                "Above us only sky"], "John Lennon")

inner_city = Song(["Rockets",
                    "Moonshots",
                    "Spend it all",
                    "On have-nots"], "Marvin Gaye")

imagine.sing_me_a_song()
imagine.credits()

inner_city.sing_me_a_song()
inner_city.credits()
