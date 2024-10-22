export default ({setFormData, formData, label, name}: {label: string, name: string, formData: any, setFormData: (formData: any) => void}) => <div className="w-[350px] mx-auto">
<label htmlFor="date-of-birth" className="block text-center mb-2 font-bold text-[#A2A7A9]">
  {label}
</label>
<div className="flex justify-between">
  <select
  onChange={(e)=>{formData[name].setDate(parseInt(e.target.value))
    setFormData({...formData})}}
    value={formData.dataNasc.getDate()}
    id="day"
    className="w-[30%] rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9] p-2" required
  >
    <option value="">Dia</option>
    {Array.from({ length: 31 }, (_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ))}
  </select>

  <select
    id="month"
    className="w-[30%] rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9] p-2" required
    onChange={(e)=>{formData[name].setMonth(parseInt(e.target.value))
      setFormData({...formData})}}
      value={formData.dataNasc.getMonth()}
  >
    
    <option value="">Mês</option>
    {[
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ].map((month, index) => (
      <option key={index} value={index + 1}>
        {month}
      </option>
    ))}
  </select>
  <select
    id="year"
    className="w-[30%] rounded-[5px] border border-none bg-[#F5F5F5] font-bold text-[#A2A7A9] p-2" required
    onChange={(e)=>{
      console.log(e.target.value)
      formData[name].setFullYear(parseInt(e.target.value))
      console.log(formData.dataNasc.getFullYear())
      setFormData({...formData})}}
      value={formData.dataNasc.getFullYear()}
  >
    <option value="">Ano</option>
    {Array.from({ length: 100 }, (_, i) => (
      <option key={i} value={2024 - i}>
        {2024 - i}
      </option>
    ))}
  </select>
</div>
</div>