import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import PersistentDrawerLeft from "./layout/PersistentDrawerLayout";
import BasicTabs from "./layout/BasicTabs";
import ViewReviews from "./components/code-reviews/ViewReviews";
import AddReviewModal from "./components/code-reviews/AddReviewModal";
import useOverflowX from "./overflow-styling/useOverflowX";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PersistentDrawerLeft />}>
      <Route index element={<BasicTabs />} />
      <Route path="code-reviews" element={<ViewReviews />}>
        <Route path="add-review" element={<AddReviewModal />} />
      </Route>
    </Route>
  )
);

export default function PairProgrammingDashboard() {
  useOverflowX();
  return <RouterProvider router={router} />;
}
