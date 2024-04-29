// import ActiveLabel from './components/active-label';
// import NotActiveLabel from './components/not-active-label';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      {/* <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not active</NotActiveLabel> */}
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
