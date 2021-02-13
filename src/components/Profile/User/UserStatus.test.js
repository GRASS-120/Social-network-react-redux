import React from 'react';
import { create } from 'react-test-renderer';
import UserStatus from './UserStatus';

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<UserStatus status="it-kamasutra.com" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('it-kamasutra.com');
  });

  test('after creation <span> should be showed', () => {
    const component = create(<UserStatus status="it-kamasutra.com" />);
    const root = component.root;
    const span = root.findByType('span');
    expect(span).not.toBeNull();
  });

  test("after creation <input> shouldn't be showed", () => {
    const component = create(<UserStatus status="it-kamasutra.com" />);
    const root = component.root;

    // обработка ошибки
    expect(() => {
      const input = root.not.findByType('input');
    }).toThrow();
  });

  // проверка текста статуса
  test('after creation <span> should contains the correct status', () => {
    const component = create(<UserStatus status="it-kamasutra.com" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).toBe('Status: ');
  });
});
