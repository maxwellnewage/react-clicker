import { IconType } from 'react-icons'
import { BsHandIndexThumb, BsMinecartLoaded, BsBank } from 'react-icons/bs'
import { MdElderlyWoman, MdFactory } from 'react-icons/md'
import { GiFarmTractor } from 'react-icons/gi'


export type ItemType = {
    name: string,
    icon: IconType,
    cost: number,
    give: number
}

const items: ItemType[] = [
    {
        name: "Cursor",
        icon: BsHandIndexThumb,
        cost: 1,
        give: 0.01
    },
    {
        name: "Abuela",
        icon: MdElderlyWoman,
        cost: 5,
        give: 0.02
    },
    {
        name: "Granja",
        icon: GiFarmTractor,
        cost: 10,
        give: 0.05
    },
    {
        name: "Mina",
        icon: BsMinecartLoaded,
        cost: 20,
        give: 0.07
    },
    {
        name: "Fabrica",
        icon: MdFactory,
        cost: 50,
        give: 0.10
    },
    {
        name: "Banca",
        icon: BsBank,
        cost: 100,
        give: 0.25
    },
]

export default items