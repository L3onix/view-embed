class UrlFactory {
    constructor(link){
        this.link = link
    }

    createTwitchUrl(identifier) {
        const videoPattern = /^v\d+/
        let type = 'channel';

        if (videoPattern.test(identifier)) {
            type = 'video'
        }
        return `https://player.twitch.tv/?${type}=${identifier}&parent=streamernews.example.com&autoplay=false`
    }

    verifyUrlAndReturnNewUrl(){
        if(this.link.includes('youtube')){
            return 'https://youtube.com/embed/' + this.link.split('v=')[1]
        }else if(this.link.includes('twitch')){
            return this.createTwitchUrl(this.link.split('.tv/')[1])
        }
    }
}

export default UrlFactory