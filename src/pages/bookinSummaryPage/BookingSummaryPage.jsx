import BookingSummery from "../../components/bookingSummary/BookingSummery";
import TravelerInfo from "../../components/travelerInfo/TravelerInfo";
import ".//BookingSummaryPage.scss"


export default function BookingSummaryPage() {
  return (
    <div className="summery">
      <BookingSummery />
      <TravelerInfo />
    </div>
  )
}
