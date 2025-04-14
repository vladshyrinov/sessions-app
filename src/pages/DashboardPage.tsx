import PageContainer from "../components/shared/PageContainer/PageContainer";
import SessionCreation from "../components/sessions/creation/SessionCreation";
import SessionList from "../components/sessions/list/SessionList";
import SessionsClearButton from "../components/sessions/removal/SessionsClearButton";

export default function DashboardPage() {
  return (
    <PageContainer title="Dashboard">
      <SessionCreation />
      <SessionList />
      <SessionsClearButton />
    </PageContainer>
  );
}
