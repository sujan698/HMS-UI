import { TableProps, TableColumn } from '@/src/types'

export default function Table({
  columns = [],
  data = [],
  emptyMessage = 'No data available',
  className = '',
  onRowClick,
  renderCell
}: TableProps) {
  if (!columns || columns.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No columns defined
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => {
                const columnKey = column.key || (typeof column.accessor === 'string' ? column.accessor : index.toString())
                const columnLabel = column.label || column.header || ''
                const align = column.align || 'left'
                
                return (
                  <th
                    key={typeof columnKey === 'function' ? index.toString() : String(columnKey)}
                    className={`
                      px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
                      ${align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left'}
                    `}
                    scope="col"
                  >
                    {columnLabel}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-8 text-center text-gray-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={row.id || rowIndex}
                  className={`
                    hover:bg-gray-50 transition-colors
                    ${onRowClick ? 'cursor-pointer' : ''}
                    ${className}
                  `}
                  onClick={onRowClick ? () => onRowClick(row, rowIndex) : undefined}
                >
                  {columns.map((column, colIndex) => {
                    const columnKey = column.key || column.accessor || colIndex.toString()
                    const align = column.align || 'left'
                    const cellValue =
                      column.accessor !== undefined
                        ? (typeof column.accessor === 'function'
                            ? column.accessor(row)
                            : typeof column.accessor === 'string'
                              ? row[column.accessor]
                              : undefined)
                        : (typeof columnKey === 'string'
                            ? row[columnKey]
                            : undefined)
                    
                    return (
                      <td
                        key={typeof columnKey === 'function' ? colIndex.toString() : String(columnKey)}
                        className={`
                          px-6 py-4 whitespace-nowrap text-sm text-gray-900
                          ${align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left'}
                        `}
                      >
                        {renderCell
                          ? renderCell(column, cellValue, row, rowIndex)
                          : column.render
                          ? column.render(cellValue, row, rowIndex)
                          : cellValue !== null && cellValue !== undefined
                          ? String(cellValue)
                          : '—'}
                      </td>
                    )
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

