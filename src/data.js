import {v4 as uuidv4} from "uuid";

function musicStore() {

    return [
        {
            artwork: "https://i.pinimg.com/originals/d6/6e/03/d66e03f98e1cab5e3f17445cf6e2c363.jpg",
            audio:"https://up.fakazaweb.com/wp-content/uploads/2020/10/A-Reece_-_The_Promise_Land_Fakaza.Me.com.mp3",
            song_title: "The Promised Land",
            artists: "A-Reece",
            colors: ['#8e6353', '#ccc8c5'],
            id: uuidv4(),
            active: true
        },
        {
            artwork: "https://i.pinimg.com/originals/d6/6e/03/d66e03f98e1cab5e3f17445cf6e2c363.jpg",
            audio:"https://up.fakazaweb.com/wp-content/uploads/2020/10/A-Reece_Ft_Zoocci_Coke_Dope_-_7_Days_After_Fakaza.Me.com.mp3",
            song_title: "7 Days After",
            artists: "A-Reece, Zoocci Coke Dope",
            colors: ['#8e6353', '#ccc8c5'],
            id: uuidv4(),
            active: false
        },
        {
            artwork: "https://i.pinimg.com/originals/d6/6e/03/d66e03f98e1cab5e3f17445cf6e2c363.jpg",
            audio:"https://up.fakazaweb.com/wp-content/uploads/2020/10/A-Reece_Ft_Ecco_-_Calabasas_Fulfillment__Fakaza.Me.com.mp3",
            song_title: "Calabasas (Fulfillment)",
            artists: "A-Reece, Zoocci Coke Dope",
            colors: ['#8e6353', '#ccc8c5'],
            id: uuidv4(),
            active: false
        },
        {
            artwork: "https://i.pinimg.com/originals/d6/6e/03/d66e03f98e1cab5e3f17445cf6e2c363.jpg",
            audio:"https://up.fakazaweb.com/wp-content/uploads/2020/10/A-Reece_Ft_Flame_-_Just_Another_Song_Fakaza.Me.com.mp3",
            song_title: "Just Another Song",
            artists: "A-Reece, Flvme",
            colors: ['#8e6353', '#ccc8c5'],
            id: uuidv4(),
            active: false
        },
        {
            artwork: "https://t2.genius.com/unsafe/943x0/https%3A%2F%2Fimages.genius.com%2Fd2e2f5a52b338fe1da704852fb19a2e3.600x600x1.jpg",
            audio:"https://cdn.hiphopza.com/wp-content/uploads/2019/06/04-How-You-Feel.mp3?_=3",
            song_title: "How You Feel",
            artists: "Flvme",
            colors: ['#602989', '#cb047f'],
            id: uuidv4(),
            active: false

        },
        {
            artwork: "https://images.livemixtapes.com/artists/whookid/nasty_c-zulu/cover.jpg",
            audio:"https://live.hiphopza.com/files/2020/06/Nasty_C_DJ_Whoo_Kid_-_High_Key.mp3?_=3",
            song_title: "High Key",
            artists: "Nasty C, DJ Whoo Kid",
            colors: ['#d68550', '#4e7e0e'],
            id: uuidv4(),
            active: false

        },
        {
            artwork: "https://i.pinimg.com/originals/87/43/bd/8743bd630ded4316d74c105990181b3d.jpg",
            audio:"https://live.hiphopza.com/files/2020/07/Kelvin_Momo_-_Kuwe_Ft_Babalwa_M.mp3?_=3",
            song_title: "Kuwe",
            artists: "Kelvin Momo, Babalwa M",
            colors: ['#4b2c2e', '#16203b'],
            id: uuidv4(),
            active: false

        },
    ]
}

export default musicStore;