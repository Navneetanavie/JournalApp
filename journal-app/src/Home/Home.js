import JournalEntrySquare from '../Components/JournalEntrySquare/JournalEntrySquare';
import './Home.css';

const Home =() => {
    return(
       
       <section className='home'>
        <div className='home_journal-container'>
       <h1 className='home_header'>Welcome to your Journal Nav</h1>
      <div className='home_journal-list'>
         <JournalEntrySquare />
         <JournalEntrySquare />
         <JournalEntrySquare />
         <JournalEntrySquare />
         <JournalEntrySquare />
         <JournalEntrySquare />
        </div>
    </div>
 </section>
    )
}
export default Home;