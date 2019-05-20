import React from 'react';

function InProgress() {
  return (
    <div className="in-progress">
      <h3>Comics Calendar</h3>
      <p>As a huge comic book fan, I wanted a way to view my upcoming <a href="">pull list</a> without having to track each title down. I created a small command line program that suited my needs, but I felt it was too limited to my own needs. So I've started creating a single-page web application that will read from Image, DC, Marvel, and Dark Horse comic release calendars and allow you to sort through them, define your pull list, and export it to iCal or Google Calendar. Initial mockups are available below. The code for the original CLI program is still up on <a href="" target="_blank" rel="noopener">Github</a>.
      </p>
      <article className="screenshot">

      </article>
    </div>
  )
}

export default InProgress;
