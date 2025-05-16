interface ITimeACtionProps {
  time: string,
  action: string,
  descr: string
}

function TimeAction({ time, action, descr }: ITimeACtionProps) {
  return (
    <article className="article action">
      <h3 className="action__subtitle">{time} - {action}</h3>
      <p className="text action__text">{descr}</p>
    </article>
  )
}

export default TimeAction;