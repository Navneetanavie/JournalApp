import './JournalEntrySquare.css'
const JournalEntrySquare = () => {
    return(
     <div className="journal-entry">
       <h2 className="journal-entry_title">Title : </h2>
       <h3 className="journal-entry_date"> Date : </h3> 
        <div>
          <ul className="journal-entry_tags">Dear Diary,</ul>  
        </div>
        <p className="journal-entry_body">Experiences/Thoughts</p>
     </div>
    )
    }
    export default JournalEntrySquare;