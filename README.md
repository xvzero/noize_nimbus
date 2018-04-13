# README

### Introduction
NoizeNimbus is a clone to SoundCloud, a social music website where users can upload and share songs.

A link to the live site can be found [here](https://noize-nimbus.herokuapp.com/#/)

All documentation during the process of creating the site can be found [here](https://github.com/xvzero/noize_nimbus/wiki)

---

### Technologies
- [Amazon Web Services](https://aws.amazon.com/)
- [Paperclip](https://github.com/thoughtbot/paperclip)
- [Postgresql](https://www.postgresql.org/)
- [Ruby on Rails](http://rubyonrails.org/)
- [Redux](https://redux.js.org/)
- [React](https://reactjs.org/)

Postgresql and Amazon Web Services(AWS) were used as databases for this project. We cannot store audio and image files into Postgresql so we use AWS to do so.  Paperclip is used as a tool to make attachments easier to upload to AWS. Following the react redux cycle, we create a single page web application with the Ruby On Rails framework.  

---

### Functionality

- Users have safe account authentication when signing up or logging in
- Users can upload, play, update, and delete songs
- Functional audio player bar at the bottom of the site
- The audio player does not get disrupted if a user navigates to different parts of the site

---

### Uploading multiple files

```
has_attached_file :track_file
validates_attachment_content_type :track_file,
                                  content_type:  ['audio/mpeg',
                                                  'audio/x-mpeg',
                                                  'audio/mp3',
                                                  'audio/x-mp3',
                                                  'audio/mpeg3',
                                                  'audio/x-mpeg3',
                                                  'audio/mpg',
                                                  'audio/x-mpg',
                                                  'audio/x-mpegaudio']

validates :title, :track_url, presence: true

belongs_to :user, foreign_key: :author_id
has_one :track_image, dependent: :destroy
```

Tracks are able to have more than one attachment: the audio file and and an optional image file. To do this, extra assets were made and associated with the model that required them.  This will eventually lead to the ability to upload multiple songs as a playlist. There are also validations to ensure that users can't upload malicious files.

---

### Audio player
(https://i.imgur.com/ZduBJ9i.png)

The audio player has most of the functionality of any audio player.  Users can seek through the entire song and can adjust the volume output through the interactive sliders. Currently, the previous and next button only take the player to the beginning or end of the song.  In the future when playlists or discovery algorithms are made, the buttons will go to the previous and next songs on the playlist.

---

### Technical Challenges

Designing the entire audio bar to make it an a functional and appealing UI was difficult.  There were multiple ways to implement it.  I first came across the way of using an input[type='range'] for the sliders, but I realized there wasn't much in terms of styling so I scrapped it. I then tried out different react-libraries until I came across one that I was able to customize to my likings.  Another difficulty was learning the whole AWS/Paperclip file process to upload files. There wasn't much documentation for the functionality that I wanted, such as multi-file uploads or multi-part uploads so I spent a lot of time researching.  I also chose some focus points that required many things to be made beforehand, such as having a songs show page to show user comments on songs.

---

### Future features

- Search
- Playlists
- Comments
- Song Pages
- Likes/Follows
- Listening History
- Song Tags/Genres
- Discovery Algorithm
