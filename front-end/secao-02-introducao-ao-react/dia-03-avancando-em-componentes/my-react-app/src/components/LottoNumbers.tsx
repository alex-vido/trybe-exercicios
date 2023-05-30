function LottoNumbers({ numbers }: { numbers: number[] }) {
  if (numbers.length === 6) {
    return (
      <>
        <h3>Os números sorteados são:</h3>
        <ul>
          {
          numbers.map((number, index) => (
            <li key={ index } className="lotto">
              {number}
            </li>
          ))
        }
        </ul>
      </>
    );
  }
  return <h3>Erro: a lista não contém 6 números</h3>;
}

export default LottoNumbers;
