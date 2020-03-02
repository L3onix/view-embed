class UrlFactory {
    constructor(link){
        this.link = link
    }

    verifyUrlAndReturnNewUrl(){
        if(this.link.includes('youtube')){
            return 'https://youtube.com/embed/' + this.link.split('v=')[1]
        }else if(this.link.includes('twitch')){
            return 'https://player.twitch.tv/?channel=' + this.link.split('.tv/')[1]
        }
    }
}

export default UrlFactory