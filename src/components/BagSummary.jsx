const BagSummary=({})=>{

    const BagSummary={
        totalItem:"5",
        price:"3000",
        discount:"30%",
        fee:"200",
        amount:"4000"
    }




    return <div className="bag-summary">
        
     <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS ({BagSummary.totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹{BagSummary.price}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹{BagSummary.discount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">{BagSummary.fee}</span>
    </div>
    <hr/>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹{BagSummary.amount}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
    
  </div>
}

export default BagSummary