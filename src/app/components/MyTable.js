import { Table } from '@radix-ui/themes'

const defaultColumns = [
  {
    title: 'Title',
    key: 'title',
  },
  {
    title: 'Subtitle',
    key: 'subtitle',
  },
  {
    title: 'Image',
    key: 'img',
  },
  {
    title: 'Description',
    key: 'description',
  },
]

const defaultRecords = [
  {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    img: 'Card Image',
    description: 'Card Description',
  },
]

export default function MyTable({ columns = defaultColumns, records = defaultRecords }) {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell>{column.title}</Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {records.map((record) => (
          <Table.Row>
            {columns.map((column, idx) =>
              idx === 0 ? (
                <Table.RowHeaderCell>{record[column.key]}</Table.RowHeaderCell>
              ) : (
                <Table.Cell>{record[column.key]}</Table.Cell>
              ),
            )}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
