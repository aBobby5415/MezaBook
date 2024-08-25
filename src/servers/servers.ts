export interface Server {
    name: string
	ip?: string
	desc?: string
	icon?: string
    status: 'active' | 'inactive' | 'closed'

	discord?: string
	page?: string
	youtube?: string
	website?: string

	color?: string
	alt_api?: boolean
}

export const servers: { [name: string]: Server } = {
    wadner_server: {
        name: 'Wadner server',
        ip: '212.80.7.202:20444',
        status: 'active',
        icon: 'https://cdn.discordapp.com/icons/1035994086487892059/2b1e9353c623aa2fd2b5759b2cdd5f3e.webp?size=128',
        color: '#8caaa5',

        discord: 'https://discord.gg/8BdbfEKNHE',
    },
    warped_redux: {
        name: `<span class="grad-warped">Warped</span><span class="grad-redux">Redux</span>`,
        ip: 'WarpedRedux.online',
        status: 'active',
        icon: '/server-icons/warped_redux.png',
        desc: `Возвращение легендарного мистического сервера<br>Новая история, новые возможности`,
        alt_api: true,
        color: `#00cdac`,

        discord: 'https://discord.gg/Q69FqG47xw',
    },
    unknown_dead: {
        name: 'ʊռӄռօառ.⃣.⃣',
        ip: '212.80.7.230:20096',
        status: 'active',
        icon: 'https://cdn.discordapp.com/icons/995385741804830760/a_8bbf5bd85601881f716ec80cbbb1718e.webp?size=128',
        desc: `<span style='color: #bf0000;'> - Tԋҽ ɱσʂƚ ƚҽɾɾιႦʅҽ αɳԃ ԃҽɱσɳιƈ ʂҽɾʋҽɾ</span>`,
        color: '#ca9292',

        discord: 'https://discord.gg/qEupJs53Tc',
        page: `/servers/UnknownDead`,
        website: 'https://dev-ce2.github.io/devlogs/'
    },
    survival_home: {
        name: `<span class="grad-survivalhome">SurvivalHome</span>`,
        ip: 'survivalhome.0ping.ru',
        status: 'active',
        icon: 'https://cdn.discordapp.com/icons/1180571431046758490/e59a2262b1d3bb64840a363e80633c2b.webp?size=128',
        desc: `Уютный и приятный сервер!`,
		alt_api: true,
        color: '#e1c682',

        discord: 'https://discord.gg/hcKq2TPJhz',
    },
    dishade: {
        name: `<span class="color-[#C1A685]">Dishade</span>`,
        ip: '138.201.142.120:25696',
        status: "active",
        desc: 'Интересный мистический сервер.',

        discord: 'https://discord.gg/nWt9K3Ztts',
        youtube: 'https://www.youtube.com/@Dishade_Server',
    },
    new_alliance: {
        name: `NewAlliance`,
        ip: '65.109.58.46:20133',
        status: 'active',
        desc: 'После продолжительной ██████, завод превратился в руины, остатки прошлого по сей день есть в этом мире.',

        discord: 'https://discord.gg/JNKCzGYQ3U',
    },
    demonstrate: {
        name: 'Demonstrate',
        ip: '178.63.10.85:25572',
        status: 'active',
        desc: '',

        discord: 'https://discord.gg/2S2qZYk4pg'
    }

}

