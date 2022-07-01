const Arrows = ({ direction, onClick }) => {
  return (
    <div>
        <div onCLick={onClick} className='cursor-pointer bg-black'>
          <img src={`./assets/images/${direction}-arrow.svg`} alt="" />            
        </div>
    </div>
  )
}

export default Arrows