import { useState } from 'react' 
import QuestForm from './components/QuestForm'
import QuestList from './components/QuestList'
import './assets/css/App.css'

export default function App() {
  
  const addQuest = (title, setQuests) =>
    setQuests(prev => [...prev, { id: Date.now(), title, completed: false }])

  const completeQuest = (id, setQuests) =>
    setQuests(prev => prev.map(q => q.id === id ? { ...q, completed: true } : q))

  const deleteQuest = (id, setQuests) =>
    setQuests(prev => prev.filter(q => q.id !== id))

  const resetQuests = (setQuests) =>
    setQuests([])


  const [quests, setQuests] = useState([])


  const handleAddQuest = (title) => addQuest(title, setQuests)
  const handleCompleteQuest = (id) => completeQuest(id, setQuests)
  const handleDeleteQuest = (id) => deleteQuest(id, setQuests)
  const handleResetQuests = () => resetQuests(setQuests)

  return (
    <div className="app-container">
      <h1>Quest Tracker</h1>
      <QuestForm onAdd={handleAddQuest} onReset={handleResetQuests} />
      <QuestList quests={quests} onComplete={handleCompleteQuest} onDelete={handleDeleteQuest} />
    </div>
  )
}
