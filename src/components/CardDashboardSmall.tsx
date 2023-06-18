type props = {
  width?: string
}

const CardDashboardSmall = ({ width = '250px' }: props) => {
  return (
    <>
      <div style={{ width: width, background:'#d7f2f87d', }} className="h-[200px] rounded-3xl">

      </div>
    </>
  );
}

export default CardDashboardSmall;