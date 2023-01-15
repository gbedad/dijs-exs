const {db} = require('./database.js')

function createParticipant(participant, {mc_id}){
  console.log(participant.firstname, mc_id)
  return db('participants').insert(
    {
      masterclass_id: mc_id,
      firstname: participant.firstname,
      lastname: participant.lastname,
      email: participant.email,
      school: participant.school,
      school_class: participant.school_grade,
      created_on: new Date()
    }
  )
  .returning('participant_id')
  .then(([participant_id]) => {
    console.log("ID",participant_id);
    console.log("MC",mc_id);
    return db('mc_participants').insert(
      {
        mc_id: mc_id,
        participant_id: participant_id.participant_id
          }
    )
    console.log(response)
  })
}

module.exports = {
  createParticipant
}
