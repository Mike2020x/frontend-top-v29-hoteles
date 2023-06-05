import BookingSummary from "../../components/bookingSummary/BookingSummary";
import TravelerInfo from "../../components/travelerInfo/TravelerInfo";
import ".//BookingSummaryPage.scss"


export default function BookingSummaryPage() {
  return (
    <div className="summary-page">
      <BookingSummary />
      <TravelerInfo />
    </div>
  )
}
