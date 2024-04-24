import { AddToQueue } from '../components/AddToQueue'
import { QueueList } from '../components/QueueList'
import { useContext } from 'react'
import { QueueContext } from '../utils/context'

const MainPage = () => {
    const { list } = useContext(QueueContext)

    return (
        <div className="app_container">
            <AddToQueue />
            {
                list?.length > 0 && (
                    <QueueList list={list} />
                )
            }
        </div>
    )
}

export default MainPage